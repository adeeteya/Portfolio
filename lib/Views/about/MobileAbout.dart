import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';

class MobileAbout extends StatelessWidget {
  const MobileAbout({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Expanded(child: Lottie.asset('about_me.json')),
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
                  'App Developer and Tech Enthusiast based in India. Currently Interested in Flutter and AI. Love playing sports and videogames on my freetime. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique convallis elementum. Morbi auctor, mi eget ullamcorper facilisis, est neque feugiat tortor, non mollis justo velit ut mi. Quisque lacus elit, finibus eget commodo maximus, dapibus posuere nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Maecenas in blandit mi. Cras blandit lectus nisl, id tincidunt elit consectetur et. Nam dignissim felis sed blandit convallis.',
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
