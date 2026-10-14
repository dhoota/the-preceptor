# Preceptor: CCFP-EM release shrinking (R8, proguard-android-optimize.txt).
# The mapping file R8 writes (app/build/outputs/mapping/release/mapping.txt)
# is uploaded to Google Play with every release by scripts/ci/play-publish.sh,
# so Play Console can deobfuscate crashes and ANRs.
#
# Everything below is reached by reflection or from JavaScript, which R8
# cannot see. Removing or renaming any of it breaks the app at runtime.

# Readable stack traces in Play Console.
-keepattributes SourceFile,LineNumberTable
-renamesourcefileattribute SourceFile
-keepattributes *Annotation*,Signature,InnerClasses,EnclosingMethod,Exceptions,JavascriptInterface

# Capacitor core and the WebView bridge. Plugins are loaded by class name
# from assets/capacitor.plugins.json and their methods are found by their
# @PluginMethod annotation.
-keep class com.getcapacitor.** { *; }
-keep @com.getcapacitor.annotation.CapacitorPlugin class * { *; }
-keep class * extends com.getcapacitor.Plugin { *; }
-keepclassmembers class * {
    @com.getcapacitor.PluginMethod <methods>;
    @com.getcapacitor.annotation.PermissionCallback <methods>;
    @com.getcapacitor.annotation.ActivityCallback <methods>;
}
# Any object exposed to the WebView with addJavascriptInterface.
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}
-keep class org.apache.cordova.** { *; }

# Plugin packages (classpaths from capacitor.plugins.json).
-keep class com.capacitorjs.plugins.preferences.** { *; }
-keep class com.getcapacitor.community.tts.** { *; }
-keep class com.getcapacitor.plugin.privacyscreen.** { *; }
-keep class com.revenuecat.purchases.capacitor.** { *; }
-keep class com.revenuecat.purchases.hybridcommon.** { *; }

# RevenueCat and Google Play Billing. Both ship their own consumer rules;
# these are belt and braces for purchase and restore.
-keep class com.revenuecat.purchases.** { *; }
-keep class com.android.billingclient.** { *; }
-keep class com.android.vending.billing.** { *; }
-dontwarn com.android.billingclient.**
