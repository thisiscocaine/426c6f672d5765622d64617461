# Types of IP Addresses: All You Need to Know  
**Published on: 2023-12-29**

![IP Address Illustration](https://cdn.aryanaryal.com.np/626c6f672d617279616e/70686f746f73/626c6f672d696d61676573/6865726f.png?h=952372007fe5dc30eca10)

IP addresses are unique identifiers used to communicate with devices connected to a network. Different types of IP addresses have their own unique characteristics and uses.  
This article explains everything about IP addresses including **IPv4**, **IPv6**, **public**, **private**, **dynamic**, and **static IPs**.

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
- [Differences between a dedicated IP and a shared IP address](#differences-between-a-dedicated-ip-and-a-shared-ip-address)
- [Subnetting](#subnetting)
- [Other types of IP addresses](#other-types-of-ip-addresses)
- [What IP type do I get when I use a VPN?](#what-ip-type-do-i-get-when-i-use-a-vpn)
- [Responsive Web Design and Media Queries](#responsive-web-design-and-media-queries)

---

## What is an IP address?

An **IP Address (Internet Protocol address)** is a unique number assigned to each device on a network. It enables devices to communicate over local or public networks.

Example:  
When you search “What is a VPN?” on Google, your IP address is used to send the request, receive the response, and return the answer to you.

---

## Structure of an IP address

### IPv4

- 32-bit binary number  
- Four groups separated by dots  
- Range: 0–255 per group  
- ~4.3 billion combinations

Example: `192.168.1.1`

### IPv6

- 128-bit hexadecimal format  
- Eight groups separated by colons  
- Vastly larger address pool

Example: `2001:0db8:85a3:0000:0000:8a2e:0370:7334`

---

## Types of IP addresses

IP addresses are categorized by:

- **Version**: IPv4 or IPv6  
- **Scope**: Public or Private  
- **Assignment**: Static or Dynamic

---

## What is a private IP address?

Private IPs are used within local networks (homes/offices).  
They are not exposed to the internet and are safe from public cyber threats.

### RFC 1918 Reserved Ranges

- `10.0.0.0 – 10.255.255.255`  
- `172.16.0.0 – 172.31.255.255`  
- `192.168.0.0 – 192.168.255.255`

**Assigned by:** Routers or DHCP servers

**Advantages:**

- Reusable  
- Safe from external networks

**Limitations:**

- Cannot access internet directly  
- Require NAT or VPN for external access

---

## What is a public IP address?

Public IPs are visible on the internet and are assigned by ISPs.

- Identifies your network to the world  
- Shared by multiple devices via a router

**Risks:**

- Trackable  
- Vulnerable to cyberattacks

---

## Two types of public IP addresses

### Dynamic IP

- Assigned by ISP  
- Changes regularly  
- More secure by default  
- Used in households

### Static IP

- Manually assigned  
- Remains the same  
- Best for hosting, DNS, and remote access  
- May cost extra

---

## Differences between a dedicated IP and a shared IP address

| Feature       | Dedicated IP             | Shared IP               |
|---------------|---------------------------|--------------------------|
| Ownership     | One user                  | Multiple users          |
| Use Case      | Hosting, secure tasks     | General web access      |
| Reputation    | Controlled individually   | Shared responsibility   |
| Cost          | Higher                    | Lower                   |

**Example:**  
Services like NordVPN offer **Meshnet** for secure remote access without dedicated IPs.

---

## Subnetting

**Subnetting** divides a larger network into smaller segments or "subnets".

**Benefits:**

- Improves performance  
- Enhances security  
- Reduces traffic  
- Simplifies routing

**Subnet Mask Example:**  
`255.255.255.0` separates network and host identifiers.

---

## Other types of IP addresses

- **Multicast IP**: Send the same data to many devices (e.g., streaming).  
- **Broadcast IP**: Send data to all devices on the network.  
- **Default Gateway IP**: Your router’s IP, connecting your network to the internet.  
- **Localhost IP**: Refers to the same device, usually `127.0.0.1`.

---

## What IP type do I get when I use a VPN?

VPNs typically assign **shared IPs**:

**Advantages:**

- Enhanced privacy  
- Easier content access across regions

**Drawbacks:**

- CAPTCHA prompts  
- Potential website blocks (due to shared abuse)

Still, these issues are rare and outweighed by privacy benefits.

---

## Responsive Web Design and Media Queries

Responsive Web Design (RWD) ensures websites look good across all screen sizes: mobile, tablet, desktop, and more.

### Media Query Syntax

```css
/* Mobile (up to 600px) */
@media (max-width: 600px) {
  body {
    font-size: 14px;
    padding: 1rem;
  }
}

/* Tablets (601px to 992px) */
@media (min-width: 601px) and (max-width: 992px) {
  body {
    font-size: 16px;
    padding: 2rem;
  }
}

/* Laptops and Desktops (993px and above) */
@media (min-width: 993px) {
  body {
    font-size: 18px;
    padding: 3rem;
  }
}
