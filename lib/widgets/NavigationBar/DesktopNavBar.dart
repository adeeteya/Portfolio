import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hovering/hovering.dart';
import 'package:portfolio/CustomTheme.dart';

class DesktopNavBar extends StatelessWidget with PreferredSizeWidget {
  final PageController controller;
  final int pageNo;
  DesktopNavBar({required this.controller, required this.pageNo});
  @override
  Size get preferredSize => Size.fromHeight(50);
  @override
  Widget build(BuildContext context) {
    return AppBar(
      elevation: 0,
      backgroundColor: Colors.transparent,
      titleSpacing: 80,
      title: Text(
        'Aditya R',
        style: GoogleFonts.parisienne(
            fontSize: 24, color: customTheme.navBarTextColor),
      ),
      actions: [
        HoverButton(
          onpressed: () {
            controller.animateToPage(0,
                duration: Duration(seconds: 1), curve: Curves.easeInOutSine);
          },
          textColor: (pageNo == 0)
              ? CustomColors.porsche
              : customTheme.navBarTextColor,
          hoverTextColor: CustomColors.porsche,
          child: Text('home'),
        ),
        HoverButton(
          onpressed: () {
            controller.animateToPage(1,
                duration: Duration(seconds: 1), curve: Curves.easeInOutSine);
          },
          textColor: (pageNo == 1)
              ? CustomColors.porsche
              : customTheme.navBarTextColor,
          hoverTextColor: CustomColors.porsche,
          child: Text('about'),
        ),
        HoverButton(
          onpressed: () {
            controller.animateToPage(2,
                duration: Duration(seconds: 1), curve: Curves.easeInOutSine);
          },
          textColor: (pageNo == 2)
              ? CustomColors.porsche
              : customTheme.navBarTextColor,
          hoverTextColor: CustomColors.porsche,
          child: Text('skills'),
        ),
        HoverButton(
          onpressed: () {
            controller.animateToPage(3,
                duration: Duration(seconds: 1), curve: Curves.easeInOutSine);
          },
          textColor: (pageNo == 3)
              ? CustomColors.porsche
              : customTheme.navBarTextColor,
          hoverTextColor: CustomColors.porsche,
          child: Text('projects'),
        ),
        HoverButton(
          onpressed: () {
            controller.animateToPage(4,
                duration: Duration(seconds: 1), curve: Curves.easeInOutSine);
          },
          textColor: (pageNo == 4)
              ? CustomColors.porsche
              : customTheme.navBarTextColor,
          hoverTextColor: CustomColors.porsche,
          child: Text('contact'),
        ),
        IconButton(
            onPressed: () {
              customTheme.toggleTheme();
            },
            icon: (customTheme.currentTheme == ThemeMode.dark)
                ? Icon(Icons.light_mode, size: 18)
                : Icon(Icons.dark_mode, size: 18)),
        SizedBox(width: 40)
      ],
    );
  }
}
