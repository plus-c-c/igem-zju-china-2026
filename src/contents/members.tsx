import { useState } from "react";
import { members, type Member } from "./members-data";
import "./members.css";

function MemberCard({ member, index }: { member: Member; index: number }) {
  const [imageFailed, setImageFailed] = useState(false);
  const initials = member.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <article
      className={`members-card${index % 2 ? " members-card--reversed" : ""}`}
      aria-labelledby={member.id}
    >
      <div className="members-card__portrait">
        {member.imageUrl && !imageFailed ? (
          <img
            src={member.imageUrl}
            style={{ objectPosition: member.imagePosition }}
            alt={`Portrait of ${member.name}`}
            width={320}
            height={320}
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
          />
        ) : (
          <div
            className="members-card__initials"
            role="img"
            aria-label={`Initials for ${member.name}`}
          >
            {initials}
          </div>
        )}
      </div>
      <div className="members-card__details">
        <h3 id={member.id}>
          {member.name}
          {member.nickname ? ` (${member.nickname})` : ""}
        </h3>
        <p className="members-card__role">{member.role}</p>
        <p className="members-card__bio">{member.bio}</p>
      </div>
    </article>
  );
}

export function Members() {
  return (
    <div className="members-page">
      <figure className="members-photo">
        <img
          src="https://static.igem.wiki/teams/6102/wiki/images/member/team.avif"
          alt="ZJU-China 2026 team gathered together outdoors"
          width={3000}
          height={2000}
          decoding="async"
        />
        <figcaption>ZJU-China · iGEM 2026</figcaption>
      </figure>

      {[
        { id: "leaders", title: "Meet the Student Leaders" },
        { id: "students", title: "STUDENT TEAM MEMBERS" },
        { id: "pis", title: "Meet the PIs" },
        { id: "advisors", title: "Meet the Advisors" },
      ].map((group) => (
        <section
          className="members-section"
          key={group.id}
          aria-labelledby={`members-${group.id}`}
        >
          <h2 id={`members-${group.id}`}>{group.title}</h2>
          <div className="members-list">
            {members
              .filter((member) => member.group === group.id)
              .map((member, index) => (
                <MemberCard key={member.id} member={member} index={index} />
              ))}
          </div>
        </section>
      ))}
    </div>
  );
}
