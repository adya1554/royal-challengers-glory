#!/bin/bash
cd /home/ubuntu/bashscripts/Day8/react-helmcharts/
helm upgrade react-helmcharts .
pods_id=$(kubectl get pods -n react-microk8s |grep react |awk {'print $1'})
kubectl delete pod $pods_id -n react-microk8s
