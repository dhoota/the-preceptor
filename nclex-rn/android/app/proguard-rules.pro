# R8 rules for the release build (minifyEnabled + shrinkResources, with
# proguard-android-optimize.txt). The libraries also ship consumer rules. These
# keep the pieces that are found by name or reflection at run time, so the app
# still works if a library's own rules change.

# Readable Play Console stack traces. The mapping file
# (build/outputs/mapping/release/mapping.txt) is uploaded with each AAB.
-keepattributes SourceFile,LineNumberTable,*Annotation*,Signature,InnerClasses,EnclosingMethod,Exceptions
-renamesourcefileattribute SourceFile

# Capacitor runtime. The bridge looks plugins up by class name from
# assets/capacitor.plugins.json and calls @PluginMethod methods by name.
-keep class com.getcapacitor.** { *; }
-keep interface com.getcapacitor.** { *; }
-keep @com.getcapacitor.annotation.CapacitorPlugin class * { *; }
-keep class * extends com.getcapacitor.Plugin { *; }
-keepclassmembers class * {
    @com.getcapacitor.PluginMethod public <methods>;
    @com.getcapacitor.annotation.PermissionCallback <methods>;
    @com.getcapacitor.annotation.ActivityCallback <methods>;
}

# Plugins in capacitor.settings.gradle.
-keep class com.capacitorjs.plugins.preferences.** { *; }
-keep class com.getcapacitor.plugin.privacyscreen.** { *; }
-keep class com.revenuecat.purchases.capacitor.** { *; }

# The WebView JS bridge (window.androidBridge) and any other JS interface.
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}
-keepattributes JavascriptInterface

# Play Billing and RevenueCat (purchase, restore, entitlements).
-keep class com.android.billingclient.** { *; }
-keep interface com.android.billingclient.** { *; }
-keep class com.android.vending.billing.** { *; }
-keep class com.revenuecat.purchases.** { *; }
-dontwarn com.revenuecat.purchases.**

# Cordova compatibility layer that Capacitor builds in.
-keep class org.apache.cordova.** { *; }
-dontwarn org.apache.cordova.**
