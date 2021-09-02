import 'package:flutter/material.dart';
import 'package:portfolio/CustomTheme.dart';
import 'package:portfolio/widgets/DesktopView.dart';
import 'package:portfolio/widgets/MobileView.dart';
import 'package:portfolio/widgets/ResponsiveWidget.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatefulWidget {
  @override
  State<MyApp> createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  @override
  void initState() {
    super.initState();
    customTheme.addListener(() {
      setState(() {});
    });
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Aditya R',
      themeMode: customTheme.currentTheme,
      theme: CustomTheme.lightTheme,
      darkTheme: CustomTheme.darkTheme,
      home: ResponsiveWidget(
        mobileScreen: MobileView(),
        desktopScreen: DesktopView(),
      ),
    );
  }
}
