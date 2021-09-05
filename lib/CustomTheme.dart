import 'package:flutter/material.dart';
import 'package:flutter/scheduler.dart';
import 'package:google_fonts/google_fonts.dart';

class CustomColors {
  static const Color porsche = Color(0xFFEEBF63);
  static const Color cornflower = Color(0xFF90C0E8);
  static const Color halfBaked = Color(0xFF6FC2C5);
  static const Color geebung = Color(0xFFCD921E);
  static const Color blueBayoux = Color(0xFF486074);
  static const Color william = Color(0xFF386163);

  static const Color codGray = Color(0xFF1C1C1C);
  static const Color mineShaft = Color(0xFF2F2F2F);
  //gray
  static const Color mercury = Color(0xFFE1E1E1);
  static const Color seashell = Color(0xFFF1F1F1);
  //white
}

class CustomTheme with ChangeNotifier {
  static bool _isDarkTheme =
      SchedulerBinding.instance!.window.platformBrightness == Brightness.dark;
  ThemeMode get currentTheme => _isDarkTheme ? ThemeMode.dark : ThemeMode.light;

  Color get primaryColor =>
      _isDarkTheme ? CustomColors.geebung : CustomColors.porsche;
  Color get navBarTextColor =>
      _isDarkTheme ? CustomColors.seashell : Color(0xFF151517);
  Color get hintText => _isDarkTheme ? CustomColors.mercury : Colors.grey;
  Color get alternateHeadingText =>
      _isDarkTheme ? CustomColors.seashell : Colors.white;
  Color get outlinedButtonColor =>
      _isDarkTheme ? CustomColors.seashell : CustomColors.mineShaft;
  Color get cardButtonColor =>
      _isDarkTheme ? CustomColors.mineShaft : Colors.white;
  Color get contactBackgroundColor =>
      _isDarkTheme ? CustomColors.william : CustomColors.halfBaked;
  void toggleTheme() {
    _isDarkTheme = !_isDarkTheme;
    notifyListeners();
  }

  static ThemeData get lightTheme {
    return ThemeData(
      colorScheme: ColorScheme.light(
        primary: CustomColors.porsche,
      ),
      scaffoldBackgroundColor: CustomColors.seashell,
      appBarTheme:
          AppBarTheme(iconTheme: IconThemeData(color: Color(0xFF676767))),
      iconTheme: IconThemeData(color: Color(0xFF676767)),
      textTheme: GoogleFonts.poppinsTextTheme(
          ThemeData.light().textTheme.apply(bodyColor: CustomColors.mineShaft)),
    );
  }

  static ThemeData get darkTheme {
    return ThemeData(
      colorScheme: ColorScheme.dark(
        primary: CustomColors.geebung,
      ),
      scaffoldBackgroundColor: CustomColors.codGray,
      iconTheme: IconThemeData(color: CustomColors.mercury),
      textTheme: GoogleFonts.poppinsTextTheme(
          ThemeData.dark().textTheme.apply(bodyColor: CustomColors.seashell)),
    );
  }
}

CustomTheme customTheme = CustomTheme();
