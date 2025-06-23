# Types of IP addresses: All You Need to Know
**Published:** 2023-12-29

![IP Address Diagram](https://cdn.aryanaryal.com.np/626c6f672d617279616e/70686f746f73/626c6f672d696d61676573/6865726f.png?h=952372007fe5dc30eca10)

IP addresses are unique identifiers used to communicate with devices connected to a network. Different types of IP addresses have their own unique characteristics and uses. Read this article to learn about IPv4, IPv6, public, private, dynamic, static IPs, and more.

---

## Jellyfin with a Let's Encrypt certificate

---

## Table of Contents
- [What is an IP address?](#what-is-an-ip-address)
- [Structure of an IP address](#structure-of-an-ip-address)
- [Types of IP addresses](#types-of-ip-addresses)
- [What is a private IP address?](#what-is-a-private-ip-address)
- [What is a public IP address?](#what-is-a-public-ip-address)
- [Two types of public IP addresses](#two-types-of-public-ip-addresses)
- [What is a dynamic IP address?](#what-is-a-dynamic-ip-address)
- [What is a static IP address?](#what-is-a-static-ip-address)
- [Dedicated IP vs Shared IP](#differences-between-a-dedicated-ip-and-a-shared-ip-address)
- [Subnetting](#subnetting)
- [Other types of IP addresses](#other-types-of-ip-addresses)
- [IP addresses with VPNs](#what-ip-type-do-i-get-when-i-use-a-vpn)

---

## What is an IP address?

An IP address (Internet Protocol address) is a unique number assigned to each device (e.g., PC, mobile phone, router) on a network to communicate with each other and the internet.

> For example: When you search “What is a VPN?” your IP sends the request to Google, and the result comes back using your IP to find your device.

---

## Structure of an IP address

### IPv4:
- 32-bit number
- Four decimal octets (e.g., `192.168.1.1`)
- ~4.3 billion unique combinations

### IPv6:
- 128-bit hexadecimal address
- Eight groups separated by colons (e.g., `2001:0db8:85a3:0000:0000:8a2e:0370:7334`)
- Vastly more address combinations than IPv4

---

## Types of IP addresses

IP addresses are categorized by:
- **Version**: IPv4 or IPv6
- **Scope**: Public or Private
- **Stability**: Dynamic or Static

---

## What is a private IP address?

Private IPs are assigned within local networks (home, office) using DHCP and are not accessible directly on the public internet.

### Private IP Ranges (RFC 1918):
- `10.0.0.0` – `10.255.255.255`
- `172.16.0.0` – `172.31.255.255`
- `192.168.0.0` – `192.168.255.255`

Private IPs offer internal communication, reuse across networks, and protection from public cyber threats. However, they need NAT or VPN to access the internet.

---

## What is a public IP address?

Public IPs are assigned by your ISP to identify your network on the internet.

- Shared across all your devices via router
- Routable on the internet
- Can be dynamic or static
- May expose identity or be vulnerable to attacks

---

## Two types of public IP addresses

### Dynamic IP:
- Changes periodically
- Default from ISP
- Improves security
- Ideal for personal/home use

### Static IP:
- Manually assigned
- Fixed for long-term
- Suitable for hosting, remote access, or DNS
- More vulnerable to tracking and attacks

---

## Differences between a dedicated IP and a shared IP address

| Feature       | Dedicated IP        | Shared IP         |
|---------------|---------------------|-------------------|
| **Ownership** | Used by one entity  | Shared by many    |
| **Usage**     | Single user only    | Multiple users    |
| **Reputation**| User-dependent      | Affected by others|
| **Cost**      | Higher              | Lower             |

**Alternative:** VPNs like NordVPN offer **Meshnet**, allowing device-to-device connections using your home IP.

---

## Subnetting

Subnetting divides large networks into smaller parts, improving performance and security.

- Defines network and host portions via subnet masks
- Reduces broadcast traffic
- Common in enterprises, data centers, and cloud infrastructure

---

## Other types of IP addresses

- **Multicast IP**: Sends the same data to multiple devices (e.g., video streaming).
- **Broadcast IP**: Sends data to *all* devices on the network.
- **Default Gateway IP**: Router's IP, forwards external network requests.
- **Localhost (127.0.0.1)**: Device refers to itself for testing purposes.

---

## What IP type do I get when I use a VPN?

Most VPNs assign **shared public IPs**, helping maintain anonymity and bypass censorship.

- **Pros**: Better privacy, harder to trace, access geo-restricted content
- **Cons**: Might trigger CAPTCHAs or occasional blocklists due to shared reputation

---

> 📘 **Note**: Static IPs offer stability, while dynamic ones boost security. Choose what fits your use case: hosting vs privacy.

---
