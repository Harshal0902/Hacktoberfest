import cv2 as cv
import numpy as np


frameWidth= 640
frameHight=480

cap = cv.VideoCapture(0)

cap.set(3,frameWidth)
cap.set(3,frameHight)
cap.set(10,150)

myColor = [[18,69,124,56,158,255]]

myColorValues = [[190,255,255]]           #BGR

mypoints = []  #[x, y, color index]

def findColor(img,myColors,myColorValues):
    imgHSV = cv.cvtColor(img, cv.COLOR_BGR2HSV)
    count = 0
    newPoints=[]
    for color in myColors:
        lower = np.array(color[0:3])
        upper = np.array(color[3:6])
        mask = cv.inRange(imgHSV,lower,upper)
        # cv.imshow(str(color),mask)
        x,y=getContours(mask)
        cv.circle(imgResult,(x,y),10,myColorValues[count],cv.FILLED)
        if x!=0 and y!=0:
            newPoints.append([x, y, count])
        count+=1
    return newPoints


def getContours(img):
    contours,hierarchy = cv.findContours(img,cv.RETR_EXTERNAL,cv.CHAIN_APPROX_NONE)
    x,y,w,h = 0,0,0,0
    for cnt in contours:
        area = cv.contourArea(cnt)
        if area>500:
            # cv.drawContours(imgResult, cnt, -1, (255, 0, 0), 3)
            peri = cv.arcLength(cnt,True)
            approx = cv.approxPolyDP(cnt,0.02*peri,True)
            x, y, w, h = cv.boundingRect(approx)
    return x+w//2,y

def drawOnCanvas(myPoints,myColorValues):
    for point in myPoints:
        cv.circle(imgResult, (point[0], point[1]), 10, myColorValues[point[2]], cv.FILLED)


while True:
    isTrue, frame = cap.read()
    imgResult = frame.copy()
    newPoints = findColor(frame,myColor,myColorValues)
    if len(newPoints)!= 0:
        for newp in newPoints:
            mypoints.append(newp)
    if len(mypoints)!= 0 :
        drawOnCanvas(mypoints, myColorValues)
    cv.imshow('video f by f', imgResult)
    if cv.waitKey(1) and 0xFF == ord('q'):
        break