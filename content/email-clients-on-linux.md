---
id: 5ebbf7214a948360aaec9d3c
uuid: 8bb358e5-ebdf-4da5-9936-59af7b5085c0
title: Email clients on Linux
slug: email-clients-on-linux
comment_id: 5ebbf7214a948360aaec9d3c
feature_image: null
featured: 0
type: post
status: published
locale: null
visibility: public
created_at: 2020-05-13 13:33:21
updated_at: 2020-05-13 14:02:06
published_at: 2020-05-13 13:47:40
custom_excerpt: null
codeinjection_head: null
codeinjection_foot: null
custom_template: null
canonical_url: null
email_recipient_filter: all
newsletter_id: null
lexical: null
show_title_and_feature_image: 1

---

An email client is a software that provides a user interface to read emails that it fetches from a mail server. People are quite used to online email clients such as Gmail or Outlook.com but some prefer desktop email clients that are installed on the users and not in a browser.

Let's take a look at the desktop email clients that i've used:

![](__GHOST_URL__/content/images/2020/05/image.png)

Email clients installed in a GNOME Desktop Environment

**Thunderbird**

It's one of the most popular emails clients across all platforms and a stable version has been available since quite a long time. I think it looks dated and I'm not a big fan of the threaded view. When I get bored of other email clients, I will come back to Thunderbird as the safe, secure and stable option.

    $ apt install thunderbird

**Geary**

Geary is a very simple and lightweight native email client. Its made for GNOME and looks beautiful from a distance. I think it lacks customization options. For example, I couldn't change how the font looks for read/unread email to something that would be visually different. I couldn't toggle between dark/light modes and it wouldn't convert links to links when pasted.

    $ apt install geary

**MailSpring**

Previously known as Nylas N1, is based on electron and it's a beautiful email client. Obviously, not very lightweight because well, electron. I found it to be a nice balance between features and good looks. The bad thing about Mailspring is that [it requires you to have a mailspring id](https://github.com/Foundry376/Mailspring/issues/349) and not all of it's components appear to be open source.

    $ wget https://updates.getmailspring.com/download?platform=linuxDeb