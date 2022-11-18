# PM2

PM2 is a daemon process manager in NodeJS that will help you manage and keep your application online 24/7

## Installation

```
npm install pm2 -g
```

Auto-restart your application when server restarts

```
$ pm2 startup systemd
$ pm2 save
```

## Start an application

```
$ pm2 start --name <application_name> main.js
$ pm2 start script.sh
$ pm2 start python-app.py --watch
$ pm2 start binary-file -- --port 1520
```

CLI options

```
# Specify an app name
--name <app_name>

# Watch and Restart app when files change
--watch

# Set memory threshold for app reload
--max-memory-restart <200MB>

# Specify log file
--log <log_path>

# Pass extra arguments to the script
-- arg1 arg2 arg3

# Delay between automatic restarts
--restart-delay <delay in ms>

# Prefix logs with time
--time

# Do not auto restart app
--no-autorestart

# Specify cron for forced restart
--cron <cron_pattern>

# Attach to application log
--no-daemon
```

## List all applications

```
pm2 list
```

## Manage applications

```
$ pm2 restart app_name
$ pm2 reload app_name
$ pm2 stop app_name
$ pm2 delete app_name
```

## Check Logs

```
$ pm2 logs
$ pm2 monit              # Monitor all processes
```

## Find Port of running NodeJS application

```
$ pm2 list     # List all applications and copy PID
$ sudo netstat -ano -p tcp | grep <PID>
```

## Cluster mode

For Node.js applications, PM2 includes an automatic load balancer that will share all HTTP[s]/Websocket/TCP/UDP connections between each spawned processes.

To start an application in Cluster mode:

```
$ pm2 start app.js -i max
```

# CheatSheet

Here are some commands that are worth knowing. Just try them with a sample application or with your current web application on your development machine:

### Fork mode

```
pm2 start app.js --name my-api # Name process
```

### Cluster mode

```
pm2 start app.js -i 0 # Will start maximum processes with LB depending on available CPUs
pm2 start app.js -i max # Same as above, but deprecated.
pm2 scale app +3 # Scales `app` up by 3 workers
pm2 scale app 2 # Scales `app` up or down to 2 workers total
```

### Listing

```
pm2 list # Display all processes status
pm2 jlist # Print process list in raw JSON
pm2 prettylist # Print process list in beautified JSON

pm2 describe 0 # Display all information about a specific process

pm2 monit # Monitor all processes
```

### Logs

```
pm2 logs [--raw] # Display all processes logs in streaming
pm2 flush # Empty all log files
pm2 reloadLogs # Reload all logs
```

### Actions

```
pm2 stop all # Stop all processes
pm2 restart all # Restart all processes

pm2 reload all # Will 0s downtime reload (for NETWORKED apps)

pm2 stop 0 # Stop specific process id
pm2 restart 0 # Restart specific process id

pm2 delete 0 # Will remove process from pm2 list
pm2 delete all # Will remove all processes from pm2 list
```

### Misc

```
pm2 reset <process> # Reset meta data (restarted time...)
pm2 updatePM2 # Update in memory pm2
pm2 ping # Ensure pm2 daemon has been launched
pm2 sendSignal SIGUSR2 my-app # Send system signal to script
pm2 start app.js --no-daemon
pm2 start app.js --no-vizion
pm2 start app.js --no-autorestart
```
