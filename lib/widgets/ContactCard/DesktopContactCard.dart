import 'package:flutter/material.dart';
import 'package:hovering/hovering.dart';
import 'package:portfolio/CustomTheme.dart';
import 'package:portfolio/models/contactItem.dart';

class DesktopContactCard extends StatelessWidget {
  final ContactItem contactItem;
  const DesktopContactCard({Key? key, required this.contactItem})
      : super(key: key);

  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        contactItem.onClickContact();
      },
      child: HoverContainer(
        width: 200,
        height: 200,
        cursor: SystemMouseCursors.click,
        padding: EdgeInsets.all(8),
        decoration: BoxDecoration(
            color: customTheme.cardButtonColor,
            borderRadius: BorderRadius.circular(30)),
        hoverDecoration: BoxDecoration(
            color: Color(0X80EEBF63), borderRadius: BorderRadius.circular(20)),
        child: Column(mainAxisAlignment: MainAxisAlignment.center, children: [
          Icon(
            contactItem.iconData,
            size: 64,
            color: CustomColors.porsche,
          ),
          Text(
            contactItem.title,
            style: TextStyle(fontSize: 18, color: customTheme.navBarTextColor),
          ),
          Text(contactItem.value,
              style:
                  TextStyle(fontSize: 18, color: customTheme.navBarTextColor))
        ]),
      ),
    );
  }
}
