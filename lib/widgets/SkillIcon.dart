import 'package:flutter/material.dart';
import 'package:portfolio/models/skillItem.dart';

class SkillIcon extends StatelessWidget {
  final SkillItem skillItem;
  final bool isDesktop;
  const SkillIcon({Key? key, required this.skillItem, required this.isDesktop})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Image(
          image: skillItem.imageAsset,
          height: (isDesktop) ? 64 : 32,
          width: (isDesktop) ? 64 : 32,
          fit: BoxFit.scaleDown,
          alignment: FractionalOffset.center,
        ),
        Text(
          skillItem.skillName,
          style: TextStyle(
            fontSize: (isDesktop) ? 18 : 16,
          ),
        )
      ],
    );
  }
}
