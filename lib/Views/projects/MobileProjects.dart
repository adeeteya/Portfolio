import 'package:flutter/material.dart';
import 'package:portfolio/CustomTheme.dart';
import 'package:portfolio/models/Portfolio.dart';
import 'package:portfolio/widgets/RepoCard/MobileRepoCard.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher.dart';

class MobileProjects extends StatefulWidget {
  const MobileProjects({Key? key}) : super(key: key);

  @override
  _MobileProjectsState createState() => _MobileProjectsState();
}

class _MobileProjectsState extends State<MobileProjects> {
  @override
  Widget build(BuildContext context) {
    Portfolio _portfolio = Provider.of<Portfolio>(context);
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
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
              style: TextStyle(fontSize: 22, fontWeight: FontWeight.w600),
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
          (_portfolio.repoList == null)
              ? CircularProgressIndicator()
              : Container(
                  height: 250,
                  child: ListView.builder(
                    scrollDirection: Axis.horizontal,
                    itemCount: _portfolio.repoList!.length,
                    clipBehavior: Clip.none,
                    itemBuilder: (context, index) {
                      return MobileRepoCard(repo: _portfolio.repoList![index]);
                    },
                  ),
                ),
        ],
      ),
    );
  }
}
