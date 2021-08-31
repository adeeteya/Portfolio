import 'package:animated_text_kit/animated_text_kit.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
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
                  style: TextStyle(fontSize: 18, fontWeight: FontWeight.w500),
                ),
                RichText(
                  text: TextSpan(
                      style: TextStyle(
                          fontSize: 24,
                          color: Color(0xFFF1F1F1),
                          fontWeight: FontWeight.w600),
                      text: "I'm ",
                      children: [
                        TextSpan(
                            text: 'Aditya R',
                            style: TextStyle(color: Color(0xFFEEBF63)))
                      ]),
                ),
                SizedBox(height: 10),
                AnimatedTextKit(repeatForever: true, animatedTexts: [
                  TypewriterAnimatedText('Flutter Development',
                      speed: const Duration(milliseconds: 150),
                      textStyle:
                          TextStyle(fontSize: 24, fontWeight: FontWeight.w600)),
                  TypewriterAnimatedText('Arduino Development',
                      speed: const Duration(milliseconds: 150),
                      textStyle:
                          TextStyle(fontSize: 24, fontWeight: FontWeight.w600)),
                  TypewriterAnimatedText('Native Android Development',
                      speed: const Duration(milliseconds: 150),
                      textStyle:
                          TextStyle(fontSize: 24, fontWeight: FontWeight.w600)),
                ]),
                SizedBox(height: 10),
                Text(
                  'Contact Me',
                  style: TextStyle(color: Color(0xFFE1E1E1), fontSize: 18),
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
                          color: Color(0xFFE1E1E1),
                        )),
                    SizedBox(width: 10),
                    IconButton(
                        onPressed: () {
                          launch("mailto:aditya.r@email.com?body=Hey,");
                        },
                        icon: Icon(
                          Icons.mail,
                          color: Color(0xFFE1E1E1),
                        )),
                    SizedBox(width: 10),
                    IconButton(
                        onPressed: () {
                          Clipboard.setData(ClipboardData(text: "Aditya#0039"));
                          ScaffoldMessenger.of(context).showSnackBar(SnackBar(
                              content: Text('Discord Id copied to clipboard')));
                        },
                        icon: Image.asset(
                          'discord_icon.png',
                          color: Color(0xFFE1E1E1),
                        )),
                  ],
                ),
                SizedBox(height: 20),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    ElevatedButton.icon(
                      style: ElevatedButton.styleFrom(
                          primary: Color(0xFFCD921E),
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(10)),
                          padding: EdgeInsets.symmetric(
                              vertical: 16, horizontal: 30)),
                      icon: Icon(Icons.mail_outlined),
                      onPressed: () {
                        launch("mailto:aditya.r@email.com?body=Hey,");
                      },
                      label: Text('Mail me', style: TextStyle(fontSize: 16)),
                    ),
                    SizedBox(width: 20),
                    OutlinedButton.icon(
                      style: OutlinedButton.styleFrom(
                          primary: Color(0xFFF1F1F1),
                          side: BorderSide(color: Color(0xFFCD921E), width: 2),
                          shape: RoundedRectangleBorder(
                              borderRadius: BorderRadius.circular(10)),
                          padding: EdgeInsets.all(16)),
                      icon: Icon(Icons.download),
                      onPressed: () {},
                      label:
                          Text('Download CV', style: TextStyle(fontSize: 16)),
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
