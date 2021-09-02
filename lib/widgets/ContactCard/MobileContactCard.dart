import 'package:flutter/material.dart';
import 'package:portfolio/CustomTheme.dart';
import 'package:portfolio/models/contactItem.dart';

class MobileContactCard extends StatelessWidget {
  final ContactItem contactItem;
  const MobileContactCard({Key? key, required this.contactItem})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        contactItem.onClickContact();
      },
      child: Container(
        width: 200,
        height: 120,
        padding: EdgeInsets.all(8),
        margin: EdgeInsets.only(bottom: 10),
        decoration: BoxDecoration(
            color: customTheme.cardButtonColor,
            borderRadius: BorderRadius.circular(30)),
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          Icon(
            contactItem.iconData,
            size: 32,
            color: CustomColors.porsche,
          ),
          Text(
            contactItem.title,
            style: TextStyle(fontSize: 16, color: customTheme.navBarTextColor),
          ),
          Text(
            contactItem.value,
            style: TextStyle(fontSize: 16, color: customTheme.navBarTextColor),
            textAlign: TextAlign.center,
          )
        ]),
      ),
    );
  }
}
