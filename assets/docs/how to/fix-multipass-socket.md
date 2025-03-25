# fix multipass connect to socket

## Ensure permission

Ensure permission of multipass socket

```bash
ls -l /var/snap/multipass/common/multipass_socket
```

Modify permission

```bash
sudo chmod 777 /var/snap/multipass/common/multipass_socket
```

## Disable IPv6

Run the `/etc/sysctl.conf`

```bash
sudo sysctl -p
```

## Restart Multipass

Use `systemd` to restart just the Multipass daemon (multipassd) as a system service

- Low-level, direct, and affects only the daemon, not the rest of the snap

```bash
sudo systemctl restart snap.multipass.multipassd.service
```

Use Snap's own service management to restart only the multipassd service inside the snap

- Equivalent to the systemctl one above in most practical ways, but it's a Snap-native way to do it

```bash
sudo snap restart multipass.multipassd
```

Restarts all services defined in the multipass snap - both multipassd and anything else it might include (though usually multipassd is the main one)

- A broader restart than just multipassd
- Recommend for debugging

```bash
sudo snap restart multipass
```
