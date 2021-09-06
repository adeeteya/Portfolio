import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:material_design_icons_flutter/material_design_icons_flutter.dart';
import 'package:portfolio/CustomTheme.dart';
import 'package:url_launcher/url_launcher.dart';

class MobileHome extends StatelessWidget {
  const MobileHome({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.spaceBetween,
      children: [
        Expanded(
          child: Image.asset('assets/profile_image.png'),
        ),
        Expanded(
          child: Padding(
            padding: const EdgeInsets.symmetric(vertical: 4, horizontal: 16),
            child: Column(
              children: [
                Text(
                  'Hey!',
                  style: TextStyle(
                      fontSize: 18,
                      fontWeight: FontWeight.w500,
                      color: customTheme.hintText),
                ),
                RichText(
                  text: TextSpan(
                      style: TextStyle(
                          fontSize: 24,
                          fontWeight: FontWeight.w600,
                          color: Theme.of(context).textTheme.bodyText1?.color),
                      text: "I'm ",
                      children: [
                        TextSpan(
                            text: 'Aditya R',
                            style: TextStyle(color: CustomColors.porsche))
                      ]),
                ),
                SizedBox(height: 10),
                AnimatedTextKit(repeatForever: true, animatedTexts: [
                  TypewriterAnimatedText('Flutter Development',
                      speed: const Duration(milliseconds: 150),
                      textAlign: TextAlign.center,
                      textStyle:
                          TextStyle(fontSize: 24, fontWeight: FontWeight.w600)),
                  TypewriterAnimatedText('Arduino Development',
                      speed: const Duration(milliseconds: 150),
                      textAlign: TextAlign.center,
                      textStyle: TextStyle(
                        fontSize: 24,
                        fontWeight: FontWeight.w600,
                      )),
                  TypewriterAnimatedText('Native Android Development',
                      speed: const Duration(milliseconds: 150),
                      textAlign: TextAlign.center,
                      textStyle:
                          TextStyle(fontSize: 24, fontWeight: FontWeight.w600)),
                ]),
                SizedBox(height: 10),
                Text(
                  'Contact Me',
                  style: TextStyle(color: customTheme.hintText, fontSize: 18),
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    IconButton(
                        onPressed: () {
                          launch('tel:+91720092008');
                        },
                        icon: Icon(
                          Icons.phone,
                        )),
                    SizedBox(width: 10),
                    IconButton(
                        onPressed: () {
                          launch("mailto:aditya.r@email.com?body=Hey,");
                        },
                        icon: Icon(
                          Icons.mail,
                        )),
                    SizedBox(width: 10),
                    IconButton(
                        onPressed: () {
                          Clipboard.setData(ClipboardData(text: "Aditya#0039"));
                          ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                              content: Text('Discord Id copied to clipboard')));
                        },
                        icon: Icon(
                          MdiIcons.discord,
                        )),
                  ],
                ),
                SizedBox(height: 20),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    ElevatedButton.icon(
                      style: ElevatedButton.styleFrom(
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(10)),
                          padding: EdgeInsets.symmetric(
                              vertical: 16, horizontal: 30)),
                      icon: Icon(Icons.mail_outlined,
                          color: CustomColors.seashell),
                      onPressed: () {
                        launch("mailto:aditya.r@email.com?body=Hey,");
                      },
                      label: Text(
                        'Mail me',
                        style: TextStyle(
                            fontSize: 16,
                            color: Colors.white,
                            fontWeight: FontWeight.bold),
                      ),
                    ),
                    OutlinedButton.icon(
                      style: OutlinedButton.styleFrom(
                          primary: customTheme.outlinedButtonColor,
                          side: BorderSide(
                              color: customTheme.primaryColor, width: 2),
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(10)),
                          padding: EdgeInsets.all(16)),
                      icon: Icon(Icons.download),
                      onPressed: () {
                        launch(
                            "https://www.linkedin.com/in/aditya-r-2496941ba");
                      },
                      label: Text('Download CV',
                          style: TextStyle(
                              fontSize: 16, fontWeight: FontWeight.bold)),
                    )
                  ],
                )
              ],
            ),
          ),
        ),
      ],
    );
  }
}
