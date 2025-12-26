#!/bin/bash
pods_id=$(kubectl get pods -n react-microk8s |grep react |awk {'print $1'})
kubectl delete pod $pods_id -n react-microk8s