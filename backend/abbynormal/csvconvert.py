from distutils.command.clean import clean
import psycopg2
import csv
import os


filepath = os.path.abspath(os.path.dirname(__file__))
file = os.path.join(filepath, './fixtures/haunted_places.csv')

def clean_data(csv_row):
    cleaned = {}
    
    cleaned['location'] = csv_row['location']
    cleaned['state'] = csv_row['state']
    cleaned['country'] = csv_row['country']
    cleaned['city'] = csv_row['city']
    cleaned['story_title'] = csv_row['location']
    cleaned['description'] = csv_row['description']
   
    return cleaned

conn = psycopg2.connect(f"dbname=abbynormal_db")
cur = conn.cursor()




with open(file, mode='r') as csv_file:
    csv_reader = csv.DictReader(csv_file)
    for row in csv_reader:
        cleaned_data = clean_data(row)
        cur.execute("""
        INSERT INTO abbynormal_createstory (
        location,
        state,
        country,
        city,
        story_title,
        description )
        VALUES (
            %(location)s,
            %(state)s,
            %(country)s,
            %(city)s,
            %(story_title)s,
            %(description)s
        )
        """, cleaned_data)
conn.commit()

cur.close()
conn.close()