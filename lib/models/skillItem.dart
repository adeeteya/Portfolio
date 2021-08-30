import 'package:flutter/material.dart';

class SkillItem {
  final AssetImage imageAsset;
  final String skillName;
  const SkillItem({required this.imageAsset, required this.skillName});
  static const List<SkillItem> usingNowItems = [
    SkillItem(
        imageAsset: AssetImage('icons/Flutter.png'), skillName: 'Flutter'),
    SkillItem(
        imageAsset: AssetImage('icons/Android.png'), skillName: 'Android'),
    SkillItem(imageAsset: AssetImage('icons/Git.png'), skillName: 'Git'),
    SkillItem(
        imageAsset: AssetImage('icons/Arduino.png'), skillName: 'Arduino'),
  ];
  static const List<SkillItem> learningItems = [
    SkillItem(
        imageAsset: AssetImage('icons/Machine_Learning.png'), skillName: 'ML'),
    SkillItem(
        imageAsset: AssetImage('icons/Firebase.png'), skillName: 'Firebase'),
    SkillItem(imageAsset: AssetImage('icons/MySql.png'), skillName: 'MySql'),
    SkillItem(imageAsset: AssetImage('icons/Figma.png'), skillName: 'Figma'),
  ];
  static const List<SkillItem> otherSkillsItems = [
    SkillItem(imageAsset: AssetImage('icons/C.png'), skillName: 'C'),
    SkillItem(imageAsset: AssetImage('icons/Cpp.png'), skillName: 'C++'),
    SkillItem(imageAsset: AssetImage('icons/Python.png'), skillName: 'Python'),
    SkillItem(imageAsset: AssetImage('icons/Java.png'), skillName: 'Java'),
  ];
}
