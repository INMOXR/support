---  
title: PC (Windows) に Air3 グラスをキャストするための ADB  
  
description: PC (Windows) に Air3 グラスをキャストするための ADB  
sidebar:  
  order: 2  
---  
  
  
### パート 1 接続のトラブルシューティング  
  
① adb ファイルと QtScrcpy-win-x64-v3.0.1 (2).zip をダウンロードします: [adb.txt](https://drive.google.com/drive/folders/1o-iD2WmcMKEPuZu9WhSYikpj1EVWy5gq?usp=sharing)  
  
  
![](public/images/air3/adb-for-casting-1.PNG)  
  
  
② USB 経由で ADB ファイルをグラスの [内部共有ストレージ] に転送します。  
  
  
![](public/images/air3/adb-for-casting-2.PNG)  
  
  
### パート 2 起動と接続  
  
① デスクトップ上の「QtScrcpy-win-x64-v3.0.1」フォルダを探して開きます。  
  
  
![](public/images/air3/adb-for-casting-3.PNG)  
  
  
② QtScrcpy アプリケーションアイコンをダブルクリックしてソフトウェアを実行します。  
  
  
![](public/images/air3/adb-for-casting-4.PNG)  
  
  
③ インターフェースに入ったら、「ワンプッシュUSB接続」をクリックします。  
  
  
![](public/images/air3/adb-for-casting-5.png)  
  
  
* クリック後、検索が実行されます。デバイスが見つかったら、再度クリックします。  
  
  
![](public/images/air3/adb-for-casting-6.png)  
  
  
④ 接続成功。グラスのインターフェースにアクセスします。  
  
  
![](public/images/air3/adb-for-casting-7.png)  
  
  
### パート 3 接続のトラブルシューティング  
  
  
注記（デバイスが見つからない場合、以下の手順を調整してください）:  
  
  
① 画面ミラーリングソフトウェアを再起動します:  
  
  
コンピューター上の画面ミラーリングアプリケーションを完全に閉じます。  
  
  
アプリケーションを再度開き、新しい設定が読み込まれていることを確認します。  
  
  
② USBデータケーブルを抜き差しし直します。