import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/CustomTheme.dart';
import 'package:portfolio/Views/about/MobileAbout.dart';
import 'package:portfolio/Views/contact/MobileContact.dart';
import 'package:portfolio/Views/home/MobileHome.dart';
import 'package:portfolio/Views/projects/MobileProjects.dart';
import 'package:portfolio/Views/skills/MobileSkills.dart';
import 'package:portfolio/widgets/NavigationBar/MobileDrawer.dart';

class MobileView extends StatefulWidget {
  @override
  _MobileViewState createState() => _MobileViewState();
}

class _MobileViewState extends State<MobileView> {
  PageController controller = PageController(viewportFraction: 1.0);
  @override
  Widget build(BuildContext context) {
    List<Widget> _widgetsList = [
      MobileHome(),
      MobileAbout(),
      MobileSkills(),
      MobileProjects(),
      MobileContact(controller: controller),
    ];
    return Scaffold(
      appBar: AppBar(
        elevation: 0,
        backgroundColor: Colors.transparent,
        centerTitle: true,
        title: Text(
          'Aditya R',
          style: GoogleFonts.parisienne(
              fontSize: 18, color: customTheme.navBarTextColor),
        ),
        actions: [
          IconButton(
              onPressed: () {
                customTheme.toggleTheme();
              },
              icon: (customTheme.currentTheme == ThemeMode.dark)
                  ? Icon(Icons.light_mode, size: 18)
                  : Icon(Icons.dark_mode, size: 18)),
        ],
      ),
      drawer: Drawer(
          child: MobileDrawer(
        controller: controller,
      )),
      body: RawScrollbar(
        thickness: 10,
        radius: Radius.circular(12),
        timeToFade: Duration(milliseconds: 1000),
        controller: controller,
        child: PageView(
          pageSnapping: false,
          scrollDirection: Axis.vertical,
          controller: controller,
          children: _widgetsList,
        ),
      ),
    );
  }
}
