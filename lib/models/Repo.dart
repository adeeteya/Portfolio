class Repo {
  final String name;
  final String htmlUrl;
  final String description;
  Repo({required this.name, required this.description, required this.htmlUrl});
  factory Repo.fromJson(Map<String, dynamic> json) {
    return Repo(
        name: json['name'],
        description: json['description'] ?? "A github repository",
        htmlUrl: json['html_url']);
  }
}

class RepoList {
  final List<Repo> repos;
  RepoList({required this.repos});
  factory RepoList.fromJson(List<dynamic> json) {
    List<Repo> repoList = [];
    repoList = json.map((repo) => Repo.fromJson(repo)).toList();
    return RepoList(repos: repoList);
  }
}
