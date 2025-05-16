# WireGuard Cloudflare Warp Generator
To generate a Cloudflare WARP.conf file, you'll have to: <br>
- go to https://terminator.aeza.net/en/ <br>
- choose **debian** and paste in the following command: <br>
<ins>(Note: use **right click** and then **click paste**, ctrl+v won't work)</ins> <br>
```bash
bash <(wget --inet4-only -qO- https://raw.githubusercontent.com/RealTakosan/wg-warp-generator/main/wg_warp_generator.sh) <br>
```
- wait for it to generate the WARP.conf installation link <br>
- copy the link and paste it in the browser <br>
<ins>(Note: **select text**, use **right click** and then **click copy**, selecting text and pressing ctrl+c won't work)</ins> <br>
- enjoy and use your WARP.conf in any WireGuard <br>
<ins>(Note: scan the QR code if you're using the mobile WireGuard)</ins> <br>
