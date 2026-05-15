export interface GithubEvent {
  id: string;
  type: string;
  repo: { name: string };
  created_at: string;
  payload: {
    commits?: { message: string }[];
    ref?: string;
    action?: string;
    pull_request?: { title: string };
    forkee?: { full_name: string };
    head?: string;
  };
}