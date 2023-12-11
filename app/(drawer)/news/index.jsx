import { StyleSheet, Text, View} from "react-native";
import { WebView } from 'react-native-webview';
import React, { useEffect, useState } from "react";
import { getNoticias } from "../../../api/noticiasAPI"

export default function NewsPage() {

  
  return (
    <WebView
      source={{ uri: 'https://remolacha.net/#gsc.tab=0' }}
      style={{ marginTop: 20 }}
    />
  );
}