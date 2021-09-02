import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'package:portfolio/CustomTheme.dart';

class MobileDrawer extends StatelessWidget {
  final PageController controller;
  const MobileDrawer({Key? key, required this.controller}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceAround,
      children: [
        DrawerHeader(child: Lottie.asset('assets/person.json')),
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
                    ? CustomColors.porsche
                    : customTheme.navBarTextColor),
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
                    ? CustomColors.porsche
                    : customTheme.navBarTextColor),
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
                    ? CustomColors.porsche
                    : customTheme.navBarTextColor),
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
                    ? CustomColors.porsche
                    : customTheme.navBarTextColor),
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
                    ? CustomColors.porsche
                    : customTheme.navBarTextColor),
          ),
        ),
      ],
    );
  }
}
