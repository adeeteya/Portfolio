import 'package:flutter/material.dart';

class MobileDrawer extends StatelessWidget {
  final PageController controller;
  const MobileDrawer({Key? key, required this.controller}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        DrawerHeader(child: Text("Jump To")),
        TextButton(
          onPressed: () {
            controller.animateToPage(0,
                duration: Duration(seconds: 1), curve: Curves.easeInOutSine);
            Navigator.pop(context);
          },
          child: Text(
            'home',
            style: TextStyle(
                fontSize: 24,
                color: (controller.page == 0)
                    ? Color(0xFFEEBF63)
                    : Color(0xFFF1F1F1)),
          ),
        ),
        TextButton(
          onPressed: () {
            controller.animateToPage(1,
                duration: Duration(seconds: 1), curve: Curves.easeInOutSine);
            Navigator.pop(context);
          },
          child: Text(
            'about',
            style: TextStyle(
                fontSize: 24,
                color: (controller.page == 1)
                    ? Color(0xFFEEBF63)
                    : Color(0xFFF1F1F1)),
          ),
        ),
        TextButton(
          onPressed: () {
            controller.animateToPage(2,
                duration: Duration(seconds: 1), curve: Curves.easeInOutSine);
            Navigator.pop(context);
          },
          child: Text(
            'skills',
            style: TextStyle(
                fontSize: 24,
                color: (controller.page == 2)
                    ? Color(0xFFEEBF63)
                    : Color(0xFFF1F1F1)),
          ),
        ),
        TextButton(
          onPressed: () {
            controller.animateToPage(3,
                duration: Duration(seconds: 1), curve: Curves.easeInOutSine);
            Navigator.pop(context);
          },
          child: Text(
            'projects',
            style: TextStyle(
                fontSize: 24,
                color: (controller.page == 3)
                    ? Color(0xFFEEBF63)
                    : Color(0xFFF1F1F1)),
          ),
        ),
        TextButton(
          onPressed: () {
            controller.animateToPage(4,
                duration: Duration(seconds: 1), curve: Curves.easeInOutSine);
            Navigator.pop(context);
          },
          child: Text(
            'contact',
            style: TextStyle(
                fontSize: 24,
                color: (controller.page == 4)
                    ? Color(0xFFEEBF63)
                    : Color(0xFFF1F1F1)),
          ),
        ),
      ],
    );
  }
}
