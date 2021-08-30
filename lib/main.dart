import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'package:portfolio/widgets/DesktopView.dart';
import 'package:portfolio/widgets/MobileView.dart';
import 'package:portfolio/widgets/ResponsiveWidget.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Aditya R',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        canvasColor: Color(0xFF1C1C1C),
        textTheme: GoogleFonts.poppinsTextTheme(
            Theme.of(context).textTheme.apply(bodyColor: Color(0xFFF1F1F1))),
      ),
      home: ResponsiveWidget(
        mobileScreen: MobileView(),
        desktopScreen: DesktopView(),
      ),
    );
  }
}
