import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';

class DesktopAbout extends StatelessWidget {
  const DesktopAbout({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Row(
      children: [
        Expanded(child: Lottie.asset('assets/about_me.json')),
        Expanded(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'About Me',
                style: TextStyle(fontSize: 48, fontWeight: FontWeight.w600),
              ),
              Text(
                'App Developer and Tech Enthusiast based in India. Currently Interested in Flutter and AI. Love playing sports and videogames on my freetime.',
                style: TextStyle(fontSize: 18),
              )
            ],
          ),
        )
      ],
    );
  }
}
