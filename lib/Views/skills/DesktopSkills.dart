import 'package:flutter/material.dart';
import 'package:portfolio/models/skillItem.dart';
import 'package:portfolio/widgets/SkillIcon.dart';

class DesktopSkills extends StatelessWidget {
  const DesktopSkills({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 150),
      child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
        Center(
          child: Text(
            'Skills',
            style: TextStyle(fontSize: 32, fontWeight: FontWeight.w600),
          ),
        ),
        Text(
          'Using now:',
          style: TextStyle(fontSize: 24, fontWeight: FontWeight.w500),
        ),
        SizedBox(height: 20),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: SkillItem.usingNowItems.map((item) {
            return SkillIcon(skillItem: item, isDesktop: true);
          }).toList(),
        ),
        SizedBox(height: 20),
        Text(
          'Learning:',
          style: TextStyle(fontSize: 24, fontWeight: FontWeight.w500),
        ),
        SizedBox(height: 20),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: SkillItem.learningItems.map((item) {
            return SkillIcon(skillItem: item, isDesktop: true);
          }).toList(),
        ),
        SizedBox(height: 20),
        Text(
          'Other Skills:',
          style: TextStyle(fontSize: 24, fontWeight: FontWeight.w500),
        ),
        SizedBox(height: 20),
        Row(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: SkillItem.otherSkillsItems.map((item) {
            return SkillIcon(skillItem: item, isDesktop: true);
          }).toList(),
        ),
      ]),
    );
  }
}
