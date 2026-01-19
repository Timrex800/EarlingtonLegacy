from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, ListFlowable, ListItem
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.pagesizes import A4
from reportlab.lib.units import cm
import os

# Get the directory of the current script
current_dir = os.path.dirname(os.path.abspath(__file__))
file_path = os.path.join(current_dir, "Earlington_Legacy_Coding_Instructions_Build_Constitution.pdf")

doc = SimpleDocTemplate(
    file_path,
    pagesize=A4,
    rightMargin=2*cm,
    leftMargin=2*cm,
    topMargin=2*cm,
    bottomMargin=2*cm
)

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="TitleStyle", fontSize=16, leading=20, spaceAfter=14))
styles.add(ParagraphStyle(name="HeaderStyle", fontSize=12, leading=16, spaceBefore=12, spaceAfter=8))
styles.add(ParagraphStyle(name="BodyStyle", fontSize=10, leading=14))

story = []

story.append(Paragraph("Earlington Legacy Initiative (NPC)", styles["TitleStyle"]))
story.append(Paragraph("Coding Instructions & Build Constitution – Operational Entry Point", styles["BodyStyle"]))
story.append(Spacer(1, 12))

story.append(Paragraph("1. Purpose", styles["HeaderStyle"]))
story.append(Paragraph(
    "This document defines the mandatory coding instructions and execution rules for the Earlington Legacy Initiative website. "
    "It is the first operational reference for developers, AI systems, and reviewers. All coding activity must comply with this framework.",
    styles["BodyStyle"]
))

story.append(Paragraph("2. Single Source of Truth", styles["HeaderStyle"]))
story.append(Paragraph(
    "GitHub is the sole authoritative repository. All code, whether created by humans or AI systems, must be committed to GitHub "
    "before it is considered valid or deployable.",
    styles["BodyStyle"]
))

story.append(Paragraph("3. Development Origin Rules", styles["HeaderStyle"]))
story.append(ListFlowable([
    ListItem(Paragraph("Google AI Studio is the primary development environment for frontend code creation.", styles["BodyStyle"])),
    ListItem(Paragraph("Google AI Studio may generate, modify, and test code, but it cannot receive updates back from GitHub.", styles["BodyStyle"])),
    ListItem(Paragraph("Only stable snapshots are exported from Google AI Studio to GitHub.", styles["BodyStyle"])),
], bulletType="bullet"))

story.append(Paragraph("4. Antigravity Coding Authority", styles["HeaderStyle"]))
story.append(ListFlowable([
    ListItem(Paragraph("Antigravity is authorised to fix, refactor, and optimise code.", styles["BodyStyle"])),
    ListItem(Paragraph("Antigravity may only apply code changes directly against GitHub.", styles["BodyStyle"])),
    ListItem(Paragraph("Antigravity is prohibited from updating Google AI Studio or deploying to production.", styles["BodyStyle"])),
], bulletType="bullet"))

story.append(Paragraph("5. Commit Rules", styles["HeaderStyle"]))
story.append(ListFlowable([
    ListItem(Paragraph("Direct commits by Antigravity are prohibited on protected branches.", styles["BodyStyle"])),
    ListItem(Paragraph("All logic changes require a Pull Request and review.", styles["BodyStyle"])),
    ListItem(Paragraph("Cosmetic-only fixes may be committed directly to a hotfix branch if explicitly approved.", styles["BodyStyle"])),
], bulletType="bullet"))

story.append(Paragraph("6. Deployment Flow", styles["HeaderStyle"]))
story.append(Paragraph(
    "Vercel deploys automatically from GitHub. Firebase provides backend services only. "
    "Afrihost DNS routes traffic and provides domain verification. No deployment bypass is permitted.",
    styles["BodyStyle"]
))

story.append(Paragraph("7. Governance Enforcement", styles["HeaderStyle"]))
story.append(Paragraph(
    "Any deviation from these coding instructions constitutes a breach of the Build Constitution and must be escalated "
    "through Jira and trustee oversight.",
    styles["BodyStyle"]
))

doc.build(story)

print(f"PDF generated at: {file_path}")
