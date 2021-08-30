import 'package:flutter/material.dart';
import 'package:portfolio/Views/about/DesktopAbout.dart';
import 'package:portfolio/Views/contact/DesktopContact.dart';
import 'package:portfolio/Views/home/DesktopHome.dart';
import 'package:portfolio/Views/projects/DesktopProjects.dart';
import 'package:portfolio/Views/skills/DesktopSkills.dart';
import 'package:portfolio/widgets/NavigationBar/DesktopNavBar.dart';

class DesktopView extends StatefulWidget {
  @override
  _DesktopViewState createState() => _DesktopViewState();
}

class _DesktopViewState extends State<DesktopView> {
  PageController controller = PageController(viewportFraction: 1.0);
  int pageNo = 0;
  @override
  Widget build(BuildContext context) {
    List<Widget> _widgetsList = [
      DesktopHome(),
      DesktopAbout(),
      DesktopSkills(),
      DesktopProjects(),
      DesktopContact(controller: controller)
    ];
    return Scaffold(
      appBar: DesktopNavBar(controller: controller, pageNo: pageNo),
      body: RawScrollbar(
        thickness: 10,
        radius: Radius.circular(12),
        timeToFade: Duration(milliseconds: 1000),
        controller: controller,
        child: PageView(
          onPageChanged: (currentPage) {
            setState(() {
              pageNo = currentPage;
            });
          },
          pageSnapping: false,
          scrollDirection: Axis.vertical,
          controller: controller,
          children: _widgetsList,
        ),
      ),
    );
  }
}
