import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:portfolio/models/Repo.dart';
import 'package:portfolio/widgets/RepoCard/DesktopRepoCard.dart';
import 'package:url_launcher/url_launcher.dart';

import '../../CustomTheme.dart';

Future<RepoList?> fetchRepos() async {
  final response = await http
      .get(Uri.parse("https://api.github.com/users/adityar224/repos"));
  if (response.statusCode == 200) {
    return RepoList.fromJson(json.decode(response.body));
  } else {
    return null;
  }
}

class DesktopProjects extends StatefulWidget {
  const DesktopProjects({Key? key}) : super(key: key);

  @override
  _DesktopProjectsState createState() => _DesktopProjectsState();
}

class _DesktopProjectsState extends State<DesktopProjects> {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 5),
      decoration: BoxDecoration(
          image: DecorationImage(
              image: (customTheme.currentTheme == ThemeMode.dark)
                  ? AssetImage('assets/projects_dark_bg.png')
                  : AssetImage('assets/projects_light_bg.png'),
              fit: BoxFit.cover)),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.spaceAround,
        children: [
          Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
            Text(
              'Projects',
              style: TextStyle(fontSize: 32, fontWeight: FontWeight.w600),
            ),
            ElevatedButton(
                style: ElevatedButton.styleFrom(
                    primary: customTheme.primaryColor,
                    padding: EdgeInsets.all(20),
                    shape: RoundedRectangleBorder(
                        borderRadius: BorderRadius.circular(10))),
                onPressed: () {
                  launch("https://github.com/adityar224");
                },
                child: Text(
                  'View More',
                  style: TextStyle(color: Colors.white),
                )),
          ]),
          FutureBuilder<RepoList?>(
              future: fetchRepos(),
              initialData: null,
              builder: (context, snapshot) {
                if (snapshot.connectionState == ConnectionState.done) {
                  if (snapshot.hasError || snapshot.data == null) {
                    return Center(
                        child: Text("Unable to fetch data at the moment"));
                  } else {
                    List<Repo> repoList = snapshot.data!.repos;
                    return Container(
                      height: 250,
                      child: ListView.builder(
                        scrollDirection: Axis.horizontal,
                        itemCount: repoList.length,
                        itemBuilder: (context, index) {
                          return DesktopRepoCard(repo: repoList[index]);
                        },
                      ),
                    );
                  }
                }
                return Center(
                    child: CircularProgressIndicator(
                  color: CustomColors.porsche,
                ));
              }),
        ],
      ),
    );
  }
}
