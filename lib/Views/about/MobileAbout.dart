import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';

class MobileAbout extends StatelessWidget {
  const MobileAbout({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Expanded(child: Lottie.asset('assets/about_me.json')),
        Expanded(
          flex: 2,
          child: Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                Text(
                  'About Me',
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
                ),
                Text(
                  'App Developer and Tech Enthusiast based in India, . Currently Interested in Flutter and AI. Love playing sports and videogames on my freetime.',
                  style: TextStyle(fontSize: 16),
                )
              ],
            ),
          ),
        )
      ],
    );
  }
}
