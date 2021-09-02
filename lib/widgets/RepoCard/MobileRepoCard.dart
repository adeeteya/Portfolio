import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:portfolio/CustomTheme.dart';
import 'package:portfolio/models/Repo.dart';
import 'package:url_launcher/url_launcher.dart';

class MobileRepoCard extends StatelessWidget {
  final Repo repo;
  const MobileRepoCard({Key? key, required this.repo}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        launch(repo.htmlUrl);
      },
      child: Container(
        width: 200,
        margin: EdgeInsets.only(right: 20),
        padding: EdgeInsets.all(16),
        decoration: BoxDecoration(
            color: customTheme.cardButtonColor,
            borderRadius: BorderRadius.circular(30)),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Text(
              repo.name,
              style: TextStyle(
                  fontSize: 18, fontWeight: FontWeight.w600, letterSpacing: 2),
              textAlign: TextAlign.center,
            ),
            Text(
              repo.description,
              style: TextStyle(fontSize: 14),
            )
          ],
        ),
      ),
    );
  }
}
