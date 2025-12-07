FROM node:20

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .

#הצהרה: השרת הזה שיצרנו מקשיב על פורט 5000 בתוך הקונטיינר. 
EXPOSE 5000

# כשמפעילים את ה־container — תפעיל את שרת ה־Node שלי
CMD ["node", "index.js"]
