import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/material.dart';
import 'package:portfolio/CustomTheme.dart';
import 'package:portfolio/models/Portfolio.dart';
import 'package:portfolio/services/FirestoreService.dart';
import 'package:portfolio/widgets/DesktopView.dart';
import 'package:portfolio/widgets/MobileView.dart';
import 'package:portfolio/widgets/ResponsiveWidget.dart';
import 'package:provider/provider.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await Firebase.initializeApp();
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
      home: FutureProvider<Portfolio>(
        create: (context) => FireStoreService().fetchData(),
        initialData: Portfolio(aboutMe: null, repoList: null),
        child: ResponsiveWidget(
          mobileScreen: MobileView(),
          desktopScreen: DesktopView(),
        ),
      ),
    );
  }
}
