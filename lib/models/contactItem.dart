import 'package:flutter/material.dart';

class ContactItem {
  final IconData iconData;
  final String title;
  final String value;
  final Function onClickContact;
  ContactItem(
      {required this.title,
      required this.value,
      required this.iconData,
      required this.onClickContact});
}
