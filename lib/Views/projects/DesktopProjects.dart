import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:portfolio/CustomTheme.dart';
import 'package:portfolio/models/Portfolio.dart';
import 'package:portfolio/widgets/RepoCard/DesktopRepoCard.dart';
import 'package:provider/provider.dart';
import 'package:url_launcher/url_launcher.dart';

class DesktopProjects extends StatefulWidget {
  const DesktopProjects({Key? key}) : super(key: key);

  @override
  _DesktopProjectsState createState() => _DesktopProjectsState();
}

class _DesktopProjectsState extends State<DesktopProjects> {
  PageController _pageController =
      PageController(viewportFraction: 1 / 3, initialPage: 1);
  int _pageNo = 1;
  @override
  Widget build(BuildContext context) {
    Portfolio _portfolio = Provider.of<Portfolio>(context);
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
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
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
          ),
          (_portfolio.repoList == null)
              ? CircularProgressIndicator()
              : Row(
                  children: [
                    IconButton(
                      color: CustomColors.porsche,
                      icon: Icon(Icons.arrow_back_ios),
                      onPressed: (_pageNo == 0)
                          ? null
                          : () {
                              _pageController.previousPage(
                                  duration: Duration(milliseconds: 300),
                                  curve: Curves.easeOutSine);
                            },
                    ),
                    Expanded(
                      child: Container(
                          height: 250,
                          child: PageView.builder(
                            scrollDirection: Axis.horizontal,
                            itemCount: _portfolio.repoList!.length,
                            clipBehavior: Clip.none,
                            controller: _pageController,
                            onPageChanged: (number) {
                              setState(() {
                                _pageNo = number;
                              });
                            },
                            itemBuilder: (context, index) {
                              return DesktopRepoCard(
                                  repo: _portfolio.repoList![index]);
                            },
                          )),
                    ),
                    IconButton(
                      color: CustomColors.porsche,
                      icon: Icon(Icons.arrow_forward_ios),
                      onPressed: (_pageNo == _portfolio.repoList!.length - 1)
                          ? null
                          : () {
                              _pageController.nextPage(
                                  duration: Duration(milliseconds: 300),
                                  curve: Curves.easeInSine);
                            },
                    ),
                  ],
                ),
        ],
      ),
    );
  }
}
