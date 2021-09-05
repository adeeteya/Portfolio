import 'dart:convert';

import 'package:cloud_firestore/cloud_firestore.dart';
import 'package:http/http.dart' as http;
import 'package:portfolio/models/Portfolio.dart';
import 'package:portfolio/models/Repo.dart';

class FireStoreService {
  FirebaseFirestore _instance = FirebaseFirestore.instance;
  Future<Portfolio> fetchData() async {
    DocumentSnapshot textFieldDocument =
        await _instance.collection('portfolio').doc('textfield').get();
    final repoResponse = await http
        .get(Uri.parse("https://api.github.com/users/adityar224/repos"));
    List<Repo>? repoList;
    if (repoResponse.statusCode == 200) {
      repoList = RepoList.fromJson(json.decode(repoResponse.body)).repos;
    } else {
      repoList = null;
    }
    return Portfolio(
        aboutMe: textFieldDocument.get('about_me'), repoList: repoList);
  }
}
