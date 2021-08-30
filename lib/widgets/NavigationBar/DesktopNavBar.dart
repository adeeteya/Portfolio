import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:hovering/hovering.dart';

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
        style: GoogleFonts.parisienne(fontSize: 24),
      ),
      actions: [
        HoverButton(
          onpressed: () {
            controller.animateToPage(0,
                duration: Duration(seconds: 1), curve: Curves.easeInOutSine);
          },
          textColor: (pageNo == 0) ? Color(0xFFEEBF63) : Color(0xFFF1F1F1),
          hoverTextColor: Color(0xFFEEBF63),
          child: Text('home'),
        ),
        HoverButton(
          onpressed: () {
            controller.animateToPage(1,
                duration: Duration(seconds: 1), curve: Curves.easeInOutSine);
          },
          textColor: (pageNo == 1) ? Color(0xFFEEBF63) : Color(0xFFF1F1F1),
          hoverTextColor: Color(0xFFEEBF63),
          child: Text('about'),
        ),
        HoverButton(
          onpressed: () {
            controller.animateToPage(2,
                duration: Duration(seconds: 1), curve: Curves.easeInOutSine);
          },
          textColor: (pageNo == 2) ? Color(0xFFEEBF63) : Color(0xFFF1F1F1),
          hoverTextColor: Color(0xFFEEBF63),
          child: Text('skills'),
        ),
        HoverButton(
          onpressed: () {
            controller.animateToPage(3,
                duration: Duration(seconds: 1), curve: Curves.easeInOutSine);
          },
          textColor: (pageNo == 3) ? Color(0xFFEEBF63) : Color(0xFFF1F1F1),
          hoverTextColor: Color(0xFFEEBF63),
          child: Text('projects'),
        ),
        HoverButton(
          onpressed: () {
            controller.animateToPage(4,
                duration: Duration(seconds: 1), curve: Curves.easeInOutSine);
          },
          textColor: (pageNo == 4) ? Color(0xFFEEBF63) : Color(0xFFF1F1F1),
          hoverTextColor: Color(0xFFEEBF63),
          child: Text('contact'),
        ),
        SizedBox(width: 40)
      ],
    );
  }
}
