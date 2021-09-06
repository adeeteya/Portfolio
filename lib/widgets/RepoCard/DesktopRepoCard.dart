import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:hovering/hovering.dart';
import 'package:portfolio/CustomTheme.dart';
import 'package:portfolio/models/Repo.dart';
import 'package:url_launcher/url_launcher.dart';

class DesktopRepoCard extends StatelessWidget {
  final Repo repo;
  const DesktopRepoCard({Key? key, required this.repo}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        launch(repo.htmlUrl);
      },
      child: HoverContainer(
        width: 300,
        margin: EdgeInsets.only(right: 20),
        cursor: SystemMouseCursors.click,
        padding: EdgeInsets.all(16),
        decoration: BoxDecoration(
            color: customTheme.cardButtonColor,
            borderRadius: BorderRadius.circular(30)),
        hoverDecoration: BoxDecoration(
            color: customTheme.primaryColor,
            borderRadius: BorderRadius.circular(20)),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [
            Text(
              repo.name,
              style: TextStyle(
                  fontSize: 24, fontWeight: FontWeight.w600, letterSpacing: 2),
              textAlign: TextAlign.center,
            ),
            Flexible(
              child: SingleChildScrollView(
                child: Text(
                  repo.description,
                  style: TextStyle(fontSize: 16),
                ),
              ),
            )
          ],
        ),
      ),
    );
  }
}
