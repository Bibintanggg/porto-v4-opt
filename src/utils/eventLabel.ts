import { GithubEvent } from "../interface/components/ui/github/types/github-event";

export default function eventLabel(e: GithubEvent): { icon: string; text: string; color: string; bg: string } {
  const repo = e.repo.name.split("/")[1] ?? e.repo.name;
  switch (e.type) {
    case "PushEvent": {
      const msg = e.payload.commits?.[0]?.message?.split("\n")[0] ?? "pushed code";
      return {
        icon: "↑", bg: "rgba(107,155,122,0.1)", color: "#6b9b7a",
        text: `Pushed to ${repo} — ${msg.slice(0, 48)}${msg.length > 48 ? "…" : ""}`,
      };
    }
    case "CreateEvent":
      return {
        icon: "✦", bg: "rgba(155,143,107,0.1)", color: "#9b8f6b",
        text: `Created ${e.payload.ref ? `branch "${e.payload.ref}"` : "repository"} in ${repo}`,
      };
    case "PullRequestEvent":
      return {
        icon: "⇄", bg: "rgba(122,123,181,0.1)", color: "#7a7bb5",
        text: `${e.payload.action === "opened" ? "Opened" : "Updated"} pull request in ${repo}`,
      };
    case "WatchEvent":
      return {
        icon: "★", bg: "rgba(181,122,122,0.1)", color: "#b57a7a",
        text: `Starred ${repo}`,
      };
    case "ForkEvent":
      return {
        icon: "⑂", bg: "rgba(122,171,181,0.1)", color: "#7aabb5",
        text: `Forked ${e.payload.forkee?.full_name ?? repo}`,
      };
    case "IssuesEvent":
      return {
        icon: "◎", bg: "rgba(181,155,107,0.1)", color: "#b59b6b",
        text: `${e.payload.action === "opened" ? "Opened" : "Closed"} issue in ${repo}`,
      };
    case "IssueCommentEvent":
      return {
        icon: "◌", bg: "rgba(150,150,150,0.08)", color: "#909090",
        text: `Commented on issue in ${repo}`,
      };
    case "DeleteEvent":
      return {
        icon: "✕", bg: "rgba(181,100,100,0.08)", color: "#b56464",
        text: `Deleted branch in ${repo}`,
      };
    default:
      return {
        icon: "·", bg: "rgba(150,150,150,0.06)", color: "#888",
        text: `Activity in ${repo}`,
      };
  }
}