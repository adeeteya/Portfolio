import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'package:portfolio/models/Portfolio.dart';
import 'package:provider/provider.dart';

class MobileAbout extends StatelessWidget {
  const MobileAbout({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Portfolio _portfolio = Provider.of<Portfolio>(context);
    return Column(
      mainAxisAlignment: MainAxisAlignment.center,
      children: [
        Flexible(child: Lottie.asset('assets/about_me.json')),
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 16),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text(
                'About Me',
                style: TextStyle(fontSize: 18, fontWeight: FontWeight.w600),
              ),
              (_portfolio.aboutMe == null)
                  ? Center(child: CircularProgressIndicator())
                  : Text(
                      _portfolio.aboutMe!,
                      style: TextStyle(fontSize: 16),
                    )
            ],
          ),
        )
      ],
    );
  }
}
