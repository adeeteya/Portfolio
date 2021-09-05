import 'package:flutter/material.dart';
import 'package:lottie/lottie.dart';
import 'package:portfolio/models/Portfolio.dart';
import 'package:provider/provider.dart';

class DesktopAbout extends StatelessWidget {
  const DesktopAbout({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    Portfolio _portfolio = Provider.of<Portfolio>(context);
    return Padding(
      padding: EdgeInsets.symmetric(vertical: 5, horizontal: 20),
      child: Row(
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
                (_portfolio.aboutMe == null)
                    ? Center(child: CircularProgressIndicator())
                    : Text(
                        _portfolio.aboutMe!,
                        style: TextStyle(fontSize: 18),
                      ),
              ],
            ),
          )
        ],
      ),
    );
  }
}
