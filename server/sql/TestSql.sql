INSERT INTO table_departement (
departement_name
)
VALUES (
"DEVELOPER"
),("MARKETING")

SELECT * FROM table_departement

INSERT INTO table_job_desk (
job_desk_name,
job_desk_allowance,
departement_id
) VALUES (
    "Frontend Developer",
    500000,
    6
),(
    "Android Developer",
    500000,
    6
)
SELECT * FROM table_job_desk

INSERT INTO table_employe (
  employe_nik,
  job_desk_id,
  employe_name,
  employe_gender,
  employe_born_date,
  employe_address,
  employe_email,
  employe_number_phone,
  employe_work_entry,employe_status,
  employe_sallary_basic
)
VALUES (
  "002",
  6,
  "Ema Fros",
  "PRIA",
  "12-01-2000",
  "Usa america",
  "emafros@gmail.com",
  "081234512",
  "01-01-2022",
  "EMPLOYE",
  5000000
)
SELECT * FROM table_employe

INSERT INTO table_journal_sallary (
 journal_title,
 journal_period,journal_created_at,
 journal_amount_cost
)
VALUES (
"Jurnal bulan januari",
"12-01-2025",
"13-01-2025",
1000000

)
SELECT * FROM table_journal_sallary

INSERT INTO table_sallary_employe (
  employe_id,
  journal_sallary_id,
  sallary_month,
  sallary_year,
  intensive_per_day,
  intensive_total_day,
  sallary_bonus,
  bonus_description,
  overtime_per_day,
  overtime_total_day,
  deductions_total,
  deductions_description,
  sallary_net
)
VALUES (
  2,
  2,
  02,
  2025,
  15000,
  30,
  500000,
"Bonus Kpi",
5,
10000,
100000,
"Potongan Bpjs"
,
10000000

)
SELECT * FROM table_sallary_employe

INSERT INTO table_savings_money (
 employe_id,
 savings_request,
 savings_nominal
) VALUES (2,"12-01-2025",100000),(2,"12-01-2025",200000)
SELECT * FROM table_savings_money

INSERT INTO table_debt_money (
 employe_id,
 debt_request,
 debt_nominal,
 debt_status
)
VALUES (
 1,
 "12-05-2025",
 100000,
 "NOT-PAID"
),(
 1,
 "12-05-2025",
 200000,
 "NOT-PAID"
)

SELECT * FROM table_employe
SELECT * FROM table_sallary_employe
SELECT * FROM table_debt_money
SELECT * FROM table_savings_money
.tables
