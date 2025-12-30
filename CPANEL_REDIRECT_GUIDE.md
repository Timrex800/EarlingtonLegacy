# 🌐 Complete cPanel/Afrihost Redirect Setup Guide

### Goal: Redirect ALL traffic to `https://www.earlingtonlegacy.org.za/`

This guide is designed for the **Earlington Legacy Initiative NPC** to ensure a professional, secure, and unified web presence. Following these steps will prevent "duplicate content" SEO issues and ensure all users see the secure padlock icon.

---

### 1. 📋 PREREQUISITES CHECKLIST

**Verify these items BEFORE making any changes:**

- [ ] ✅ **SSL Certificate:** Installed for both `earlingtonlegacy.org.za` and `www.earlingtonlegacy.org.za`. (Check "SSL/TLS Status" in cPanel).
- [ ] ✅ **Website Files:** Properly uploaded to the `public_html` directory and accessible.
- [ ] ✅ **Document Current State:** Document any current redirects. [SCREENSHOT: Current Redirects Table Here]
- [ ] ✅ **DNS Records:** Verified A records are pointing correctly to your Afrihost server IP.

---

### 2. 🔍 VISUAL IDENTIFICATION GUIDE

| cPanel Section    | What You'll See                    | Action Required                            |
| ----------------- | ---------------------------------- | ------------------------------------------ |
| **Main Menu**     | "Domains" or "Redirects"           | Click **Redirects** icon                   |
| **Redirect Tool** | "www. redirection:" options        | Choose **"Redirect with or without www."** |
|                   | **"Add"** button                   | Click to create the new rule               |
| **Form Fields**   | Domain, Directory, Redirect URL    | Fill with specific values below            |
| **Checkboxes**    | "Match www.", "Wild Card Redirect" | Check/Uncheck as indicated                 |

---

### 3. 🛠️ STEP-BY-STEP PROCEDURE

#### **Step 1: Remove Existing Redirects**

1. Locate the **"Current Redirects"** table at the bottom of the page.
2. Click **"Delete"** for any existing redirects pointing to external sites (like GitHub Pages or temporary dev URLs).
3. Confirm deletion when prompted. ✅

#### **Step 2: Create Main Redirect**

Complete this exact configuration in the "Add Redirect" form:

- **Type:** `Permanent (301)` (from dropdown)
- **https?://(www.)?:** Select `earlingtonlegacy.org.za`
- **Directory:** `/` (Leave the box next to the domain empty or with a single slash)
- **Redirects to:** `https://www.earlingtonlegacy.org.za/`
- **www. redirection:** Select `Redirect with or without www.`
- **Match www.:** ☑️ **CHECK** this box
- **Wild Card Redirect:** ⬜ **LEAVE UNCHECKED**
- Click the **"Add"** button.

---

### 4. 🔄 ALTERNATIVE SCENARIOS TABLE

| Goal                              | Domain Setting | Directory | Redirect URL                | Wildcard | When to Use                       |
| --------------------------------- | -------------- | --------- | --------------------------- | -------- | --------------------------------- |
| **Redirect everything to www**    | `ALL`          | `/`       | `https://www.domain.com/`   | No       | Standard setup (Recommended)      |
| **Redirect specific domain only** | `domain.com`   | `/`       | `https://www.domain.com/`   | No       | Multiple domains on one account   |
| **Preserve Subdirectories**       | `domain.com`   | `/*`      | `https://www.domain.com/$1` | **Yes**  | Keep URL structure (e.g., /about) |

---

### 5. 🧪 POST-SETUP VERIFICATION

**Test 1: Basic Redirects**
| Test URL | Expected Result |
|---|---|
| `http://earlingtonlegacy.org.za` | ✅ `https://www.earlingtonlegacy.org.za/` |
| `http://www.earlingtonlegacy.org.za` | ✅ `https://www.earlingtonlegacy.org.za/` |
| `https://earlingtonlegacy.org.za` | ✅ `https://www.earlingtonlegacy.org.za/` |

**Test 2: With Path Preservation**

- `http://earlingtonlegacy.org.za/about` → ✅ `https://www.earlingtonlegacy.org.za/about`
- `http://earlingtonlegacy.org.za/contact.php` → ✅ `https://www.earlingtonlegacy.org.za/contact.php`

---

### 6. ❓ TROUBLESHOOTING FAQ

**Q: Redirect creates an infinite loop?**
**A:** ⚠️ Check for conflicting `.htaccess` rules or multiple redirects in the table. Try disabling "Match www." if the loop persists.

**Q: HTTPS not working after redirect?**
**A:** ❌ Verify your SSL certificate covers **both** versions. Check the **SSL/TLS Status** icon in cPanel to ensure the "AutoSSL" has completed for all aliases.

**Q: Subpages not redirecting properly?**
**A:** ⚠️ Enable **Wild Card Redirect** and use `/*` in the Directory field with `$1` at the end of your Redirect URL (e.g., `https://www.domain.com/$1`).

---

### 7. 🌐 DNS CONFIGURATION (OPTIONAL)

If redirects fail due to DNS, ensure these records exist in your Zone Editor:

```text
Required DNS Records:
- A Record: @ → [Your Server IP Address]
- CNAME Record: www → earlingtonlegacy.org.za.
- (OR) A Record: www → [Same Server IP Address]
```

---

### 8. 🏁 FINAL CHECKLIST

- [ ] ✅ All test URLs redirect correctly.
- [ ] ✅ HTTPS padlock shows in the browser address bar.
- [ ] ✅ No "Mixed Content" warnings (Yellow triangles on the padlock).
- [ ] ✅ Website loads all resources (CSS, images, JS).
- [ ] ✅ Google Search Console updated with preferred domain (www).

---

### 9. 🚀 MIGRATION NOTES FOR FIREBASE

**⚠️ Important for future updates:** If moving to Firebase Hosting:

1. Complete these cPanel redirects first.
2. Later, when ready, update DNS A records to Firebase IPs.
3. Once DNS propagates, use **Firebase Hosting redirect rules** instead of cPanel.
4. Keep cPanel redirects active _during_ DNS propagation to ensure no downtime for users.

---

_Created for Earlington Legacy Initiative NPC - 2025_
