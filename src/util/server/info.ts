
let cachedVersionString: string | null = null;
let cachedUrl: string | null = null;

export async function getVersionString(): Promise<{
  url: string;
  version: string;
}> {
  if (cachedVersionString && cachedUrl) {
    return {
      version: cachedVersionString,
      url: cachedUrl,
    };
  }
  const enviornment = process.env.VERCEL_ENV ?? process.env.NODE_ENV;
  const vercel = process.env.VERCEL === "1";
  const {
    VERCEL_GIT_PROVIDER,
    VERCEL_GIT_COMMIT_SHA,
    VERCEL_GIT_COMMIT_REF,
    VERCEL_GIT_REPO_OWNER,
    VERCEL_GIT_REPO_SLUG,
  } = process.env;
  let infoString = "";
  if (enviornment === "production") {
    infoString = "prod";
  } else if (enviornment === "development") {
    infoString = "dev";
  } else if (enviornment === "preview" || enviornment === "test") {
    infoString = "preview";
  } else {
    if (enviornment) infoString = enviornment;
    else infoString = "unknown";
  }
  if (vercel) {
    infoString += ":vercel";
  }
  let url = "";
  if (VERCEL_GIT_PROVIDER && VERCEL_GIT_COMMIT_SHA && VERCEL_GIT_COMMIT_REF) {
    if (
      VERCEL_GIT_PROVIDER === "github" &&
      VERCEL_GIT_REPO_OWNER &&
      VERCEL_GIT_REPO_SLUG
    ) {
      url = `https://github.com/${VERCEL_GIT_REPO_OWNER}/${VERCEL_GIT_REPO_SLUG}/commit/${VERCEL_GIT_COMMIT_SHA}`;
    }
    const shortCommit = VERCEL_GIT_COMMIT_SHA.slice(0, 7);
    infoString += `:${VERCEL_GIT_PROVIDER}:${VERCEL_GIT_COMMIT_REF}/${shortCommit}`;
  } else if (!vercel) {
    // run command: git rev-parse HEAD to get the short commit
    // run command: git rev-parse --abbrev-ref HEAD to get the branch name
    let shortCommit = "";
    let branchName = "";
    try {
      const execSync = await import("child_process").then(
        (mod) => mod.execSync
      );
      shortCommit = execSync("git rev-parse HEAD").toString().trim();
      branchName = execSync("git rev-parse --abbrev-ref HEAD")
        .toString()
        .trim();
      const remoteUrl = execSync("git config --get remote.origin.url");
      if (remoteUrl) {
        // check if github
        const match = /github\.com\/([^\/]+)\/([^\/]+)(\.git)?.*/.exec(remoteUrl
          .toString()
          .trim());
        let cleanUrl = remoteUrl.toString().trim();
        if (cleanUrl.endsWith("/")) {
          cleanUrl = cleanUrl.slice(0, -1);
        }
        if (cleanUrl.endsWith(".git")) {
          cleanUrl = cleanUrl.slice(0, -4);
        }
        if (match) {
          // make a new url but with /commit/shortCommit
          url = `${cleanUrl}/commit/${shortCommit}`;
        }
      }
      shortCommit = shortCommit.slice(0, 7);
    } catch (e) {
      console.error(e);
    }
    infoString += `:git:${branchName}/${shortCommit}:local`;
  }
  cachedVersionString = infoString;
  cachedUrl = url;
  return { version: infoString, url };
}
