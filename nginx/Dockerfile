#טוען תמונה בסיסית של נוד 
FROM node:20 AS build

#מגדיר תיקיית עבודה 
WORKDIR /app 

#  מעתיקים מהמחשב שלי את התיקייה client לתוך ה־Container
COPY client ./client

#“נכנסים” לתיקייה /app/client 
WORKDIR /app/client
# עושים שם את ההתקנות 
RUN npm install
RUN npm run build


############################### 
# תמונה חדשה מבוססת על NGINX
###############################

FROM nginx:alpine

# הקונפיג שלנו
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

# תיקח קבצים מהשלב הראשון שנקרא build 
COPY --from=build /app/client/dist /usr/share/nginx/html
# במילים פשוטות: 
# תיקח את מה ש־React בנה (dist) ותשים אותו במקום ש-NGINX מגיש ממנו קבצים החוצה. 